import React from "react";
import styled from "styled-components";
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { data } from '../../utils/data';
import DataBlock from "./DataBlock";
 

const DataWrapperDiv = styled.div`
    background-color: #fff;
    padding: 16px;
    margin: 0;
    margin-left: 185px;
    margin-right: 145px;
    width: 290px;
    border-radius: 20px;
    position: relative;
`;

const DataButton = styled.button`
        font-family: ${props => props.theme.fonts.text.font_family[0]};
        width: 16px;
        height: 20px;
        border: none;
        position: absolute;
        right: 16px;
        bottom: 16px;
        color: #283592;
        background: transparent;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.25;
`;



const DataWrapper = ({ unfoldId }) => {

const getData = (id, array) => {
  return array.find(item => item.id === id); 
};

if (unfoldId === 1 || unfoldId === 3) {
  return (
    <DataWrapperDiv>
      <DataBlock data={getData(unfoldId, data.unfoldDataCard)}/>
      <DataButton>&#9432;</DataButton>
    </DataWrapperDiv>
  )
} 

if (unfoldId === 2) {
  return (
    <DataWrapperDiv>
      <Pie plugins={[ChartDataLabels]} options={getData(unfoldId, data.unfoldDataCard).options} data={getData(unfoldId, data.unfoldDataCard).data}/>
      <DataButton>&#9432;</DataButton>
    </DataWrapperDiv>
  )
}

if (unfoldId === 4) {
  return (
    <DataWrapperDiv>
      <Bar plugins={[ChartDataLabels]} options={getData(unfoldId, data.unfoldDataCard).options} data={getData(unfoldId, data.unfoldDataCard).data}/>
      <DataButton>&#9432;</DataButton>
    </DataWrapperDiv>
  )
}

};

export default DataWrapper;