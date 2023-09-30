import CN from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { ThemeProps } from '../../types';

interface Props extends ThemeProps {
  title?: string;
}

const Component: React.FC<Props> = ({className, title = 'ThenWhat'}: Props) => {
  return (
    <div className={CN(className, 'nft-collection')}>
      <div className={'__title'}>
        {title}
        <div>
          Crowdloan unlock, then what
        </div>
        <div>
          There’re multiple ways you can play with your unlocked DOT, such as direct staking, liquid staking, or lending. Compare and contrast means you need to jump back and forth between web apps, and that’s not a good experience.
        </div>
      </div>
    </div>
  );
};

const ThenWhat = styled(Component)<Props>(({theme: {extendToken}}: Props) => {
  return {
    width: extendToken.collectionImageSize,

    '.__title': {
      color: 'red'
    }
  };
});

export default ThenWhat;
