import React from 'react';
import Theme from "./Theme";
import { data } from '../utils/data';
import styled from "styled-components";
import Unfold from './Unfold/Unfold';



const Page = styled.div`
  width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`;

function App() {

  return (
   
    <Theme>
        <Page>

        <Unfold>
          {data.whatWeDoCard.map((child) => (
            <>
              <Unfold.Wrapper {...child}>
                <Unfold.Header {...child} />
                <Unfold.Content {...child} />
              </Unfold.Wrapper>
            </>
          ))}
       </Unfold>

        </Page>
      </Theme>
   
  );
}

export default App;
