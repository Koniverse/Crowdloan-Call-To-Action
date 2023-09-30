import CN from 'classnames';
import React from 'react';
import styled from 'styled-components';

import CheckContributions from './sections/CheckContributions';
import Countdown from './sections/Countdown';
import FAQ from './sections/FAQ';
import SimplifyProcess from './sections/SimplifyProcess';
import ThenWhat from './sections/ThenWhat';
import { ThemeProps } from './types';

interface Props extends ThemeProps {
}

const Component: React.FC<Props> = ({className}: Props) => {
  return (
    <div className={CN(className)}>
      <Countdown />
      <CheckContributions />
      <ThenWhat />
      <SimplifyProcess />
      <FAQ />
    </div>
  );
};

const Landing = styled(Component)<Props>(({theme: {extendToken}}: Props) => {
  return {
    width: extendToken.collectionImageSize,
  };
});

export default Landing;
