import React from "react";
import styled from "styled-components";
import illustration from "../components/images/illustration.png";

export default function Invest() {
  return (
    <InvestContainer>
      <div className="invest-content">
        <div className="invest-text">
          <div className="invest-header">
            <h1>Looking to invest in our Pig Farm ?</h1>
          </div>
          <div className="txt">
            <p>
              Bifarin farms present an attractive investment opportunity for the
              public in its farming enterprises, starting with the pig farm. In
              this round of investment, a person/entity can invest in up
              to five 'packages' worth N500,000 each. Return of investment is at
              35% after an incubation period of 8 months.  If you want to reserve
              any package(s) through through our online platform, please click on the button below
        
            </p>
            
          </div>

          <div className="invest-btn">
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ee8xL9plI0Gb_USD4ik86XOIAWcl80BGrOck-tRJe5JUNEpZTEEwODQxVFoyT0E5SlFUOTAzRlJOVCQlQCN0PWcu&embed=true" target="_blank" rel="noreferrer">
              <button>RESERVE HERE</button>
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={illustration} alt="farm gallery" />
        </div>
      </div>
    </InvestContainer>
  );
}

const InvestContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 2rem 5rem;
  .invest-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .invest-text {
      max-width: 28rem;
      .invest-header {
        padding-bottom: 0.6rem;
      }
      .txt {
        padding-bottom: 0.6rem;
        p,
        ol {
          line-height: 1.6;
          span {
            a {
              color: #43a22a;
            }
            font-weight: bold;
          }
        }
      }
      .invest-btn {
        button {
          padding: 1rem 3rem;
          border: none;
          background: #43a22a;
          border: none;
          cursor: pointer;
          color: #ffffff;
          font-family: "Avenir";
          letter-spacing: 0.06em;
          text-transform: capitalize;
        }
      }
    }
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;
      .invest-header {
        padding-top: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;