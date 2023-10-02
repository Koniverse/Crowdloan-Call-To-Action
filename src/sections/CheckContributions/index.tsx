import { Button, Form, Input } from '@subwallet/react-ui';
import CN from 'classnames';
import dayjs from 'dayjs';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { APICall } from '../../api';
import { AppContext } from '../../contexts';
import { ThemeProps } from '../../types';

interface Props extends ThemeProps {
  title?: string;
}

type CheckContributionProps = {
  address: string;
}

const Component: React.FC<Props> = ({className}: Props) => {
  const [form] = Form.useForm<CheckContributionProps>();
  const formDefault = useMemo((): CheckContributionProps => ({
    address: '5HMkyzwXxVtFa4VGid3DuDtuWxZcGqt57wq9WiZPP8YrSt6d',
  }), []);

  const {paraChainsInfo, priceMap} = useContext(AppContext);

  console.log('--------------', priceMap, paraChainsInfo);

  const [items, setItems] = useState<string[]>([]);

  const onSubmit = useCallback(({address}: CheckContributionProps) => {
    if (!address) {
      return;
    }

    APICall.fetchContributions(address)
      .then((rs) => {
        console.log('rs-----', rs);

        const items = [...rs.polkadot, ...rs.kusama];

        const result: string[] = [];

        items.forEach((i) => {
          const unlockTime = (i.unlocking_block - i.block_num) * 6 + i.block_timestamp;

          const date = dayjs.unix(unlockTime);

          const now = dayjs();
          const difference = date.diff(now, 'hour');

          const days = Math.floor(difference / 24);
          const hours = difference % 24;
          const formattedDifference = `${days} days ${hours} hrs`;

          result.push((i.para_id) +  + ' ' + date.format('YYYY-MM-DD HH:mm:ss') + '  -  ' + formattedDifference);
        });

        setItems(result);
      });
  }, []);

  return (
    <div className={CN(className, 'nft-collection')}>
      <Form
        className='__form-container'
        form={form}
        initialValues={formDefault}
        onFinish={onSubmit}
      >
        <Form.Item
          name={'address'}
        >
          <Input
            placeholder={'Address'}
          />
        </Form.Item>
      </Form>

      <Button onClick={form.submit}>Click here</Button>

      {
        items.map((i) => (
          <div key={i}>
            {i}
          </div>
        ))
      }
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CheckContributions = styled(Component)<Props>(({theme: {extendToken}}: Props) => {
  return {


    '.__title': {
      color: 'red'
    }
  };
});

export default CheckContributions;
