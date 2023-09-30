import CN from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { ThemeProps } from '../../types';

interface Props extends ThemeProps {
  title?: string;
}

const Component: React.FC<Props> = ({className, title = 'CheckContributions'}: Props) => {
  return (
    <div className={CN(className, 'nft-collection')}>
      <div className={'__title'}>
        {title}
      </div>
    </div>
  );
};

const CheckContributions = styled(Component)<Props>(({theme: {extendToken}}: Props) => {
  return {
    width: extendToken.collectionImageSize,

    '.__title': {
      color: 'red'
    }
  };
});

export default CheckContributions;
