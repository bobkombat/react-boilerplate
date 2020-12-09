import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import H1 from 'components/H1';
import { fetchData } from './utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.25rem 0;
`;

const FirstWidget = styled.div`
  width: 100%;
  height: 30rem;
  background-color: #4285f4;
  padding: 40px;
  color: white;
  border-radius: 5px;
  -webkit-box-shadow: 1px 3x 5px 3px #eee;
  -moz-box-shadow: 1px 1px 5px 3px #eee;
  box-shadow: 1px 1px 5px 3px #eee;
`;

const initialState = {
  global: {
    active: null,
    recovered: null,
    deaths: null,
  },
  Indonesia: {
    active: null,
    recovered: null,
    deaths: null,
  },
  Japan: {
    active: null,
    recovered: null,
    deaths: null,
  },
  USA: {
    active: null,
    recovered: null,
    deaths: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'global':
      return {
        ...state,
        global: {
          active: action.payload.active,
          recovered: action.payload.recovered,
          deaths: action.payload.deaths,
        },
      };
    case 'Japan':
      return {
        ...state,
        Japan: {
          active: action.payload.active,
          recovered: action.payload.recovered,
          deaths: action.payload.deaths,
        },
      };
    case 'Indonesia':
      return {
        ...state,
        Indonesia: {
          active: action.payload.active,
          recovered: action.payload.recovered,
          deaths: action.payload.deaths,
        },
      };
    case 'USA':
      return {
        ...state,
        USA: {
          active: action.payload.active,
          recovered: action.payload.recovered,
          deaths: action.payload.deaths,
        },
      };
    default:
      return state;
  }
}

function HomeWidget() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      dispatch({
        type: 'global',
        payload: {
          active: data[0].confirmed.value,
          recovered: data[0].recovered.value,
          deaths: data[0].deaths.value,
        },
      });
    };

    fetch();
  }, []);
  return (
    <section>
      <H1>Codemi Home</H1>
      <Wrapper>
        <FirstWidget>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p>Active Coronavirus cases right now</p>
              <h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>
                {new Intl.NumberFormat().format(state.global.active)}
              </h1>
            </div>
            <div>
              <p>Total deaths of Coronavirus cases.</p>
              <h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>
                {new Intl.NumberFormat().format(state.global.deaths)}
              </h1>
            </div>
            <div>
              <p>Recovered cases of Coronavirus.</p>
              <h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>
                {new Intl.NumberFormat().format(state.global.recovered)}
              </h1>
            </div>
          </div>
        </FirstWidget>
      </Wrapper>
    </section>
  );
}

export default HomeWidget;
