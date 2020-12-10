import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import H1 from 'components/H1';
import FontHeader from 'components/FontHeader';
import SubWrapper from 'components/SubWrapper';
import SecondWidget from 'components/SecondWidget';
import { fetchData } from './utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0;
  flex-wrap: wrap;
`;

const FirstWidget = styled.div`
  width: 100%;
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
      dispatch({
        type: 'Indonesia',
        payload: {
          active: data[1].confirmed.value,
          recovered: data[1].recovered.value,
          deaths: data[1].deaths.value,
        },
      });
      dispatch({
        type: 'Japan',
        payload: {
          active: data[2].confirmed.value,
          recovered: data[2].recovered.value,
          deaths: data[2].deaths.value,
        },
      });
      dispatch({
        type: 'USA',
        payload: {
          active: data[3].confirmed.value,
          recovered: data[3].recovered.value,
          deaths: data[3].deaths.value,
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
              <FontHeader>
                {new Intl.NumberFormat().format(state.global.active)}
              </FontHeader>
            </div>
            <div>
              <p>Total deaths of Coronavirus cases.</p>
              <FontHeader>
                {new Intl.NumberFormat().format(state.global.deaths)}
              </FontHeader>
            </div>
            <div>
              <p>Recovered cases of Coronavirus.</p>
              <FontHeader>
                {new Intl.NumberFormat().format(state.global.recovered)}
              </FontHeader>
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                marginBottom: '1rem',
                justifyContent: 'space-between',
                borderBottom: '1px solid #eee',
              }}
            >
              <p>Countries</p>
              <p>Active Cases</p>
            </div>
            <div
              style={{
                display: 'flex',
                marginBottom: '1rem',
                justifyContent: 'space-between',
              }}
            >
              <p>Indonesia</p>
              <p>{new Intl.NumberFormat().format(state.Indonesia.active)}</p>
            </div>
            <div
              style={{
                display: 'flex',
                marginBottom: '1rem',
                justifyContent: 'space-between',
              }}
            >
              <p>Japan</p>
              <p>{new Intl.NumberFormat().format(state.Japan.active)}</p>
            </div>
            <div
              style={{
                display: 'flex',
                marginBottom: '1rem',
                justifyContent: 'space-between',
              }}
            >
              <p>USA</p>
              <p>{new Intl.NumberFormat().format(state.USA.active)}</p>
            </div>
          </div>
        </FirstWidget>
      </Wrapper>
      <Wrapper>
        <SubWrapper>
          <H1>Countries death toll</H1>
          <SecondWidget>
            <div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #eee',
                }}
              >
                <p>Countries</p>
                <p>Total Deaths</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>Indonesia</p>
                <p>{new Intl.NumberFormat().format(state.Indonesia.deaths)}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>Japan</p>
                <p>{new Intl.NumberFormat().format(state.Japan.deaths)}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>USA</p>
                <p>{new Intl.NumberFormat().format(state.USA.deaths)}</p>
              </div>
            </div>
          </SecondWidget>
        </SubWrapper>
        <SubWrapper>
          <H1>Countries recovered case</H1>
          <SecondWidget>
            <div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #eee',
                }}
              >
                <p>Countries</p>
                <p>Total Recovered</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>Indonesia</p>
                <p>
                  {new Intl.NumberFormat().format(state.Indonesia.recovered)}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>Japan</p>
                <p>{new Intl.NumberFormat().format(state.Japan.recovered)}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                <p>USA</p>
                <p>{new Intl.NumberFormat().format(state.USA.recovered)}</p>
              </div>
            </div>{' '}
          </SecondWidget>
        </SubWrapper>
      </Wrapper>
    </section>
  );
}

export default HomeWidget;
