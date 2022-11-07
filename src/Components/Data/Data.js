import React from "react";
import styled from "styled-components";
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
 

const dataPie = {
    labels: ['Mental disorders', 'Diabetis','Cardiovascular diseases', 'Chronic respiratory diseases', 'Cancer'],
    datasets: [{
      data: [16.3, 1.7, 15.6, 4.8, 8.3],
      datalabels: {color: 'white'},
      backgroundColor: [
        '#EC1E7B',
        '#A7A7A7',
        '#BCAEC6',
        '#1EA6AE',
        '#283592'
      ],
      borderWidth: 0.5,
    }],
    borderColor: "#fff",
};

const dataBar = {
    labels: ["Non-LGBTQIA+", "LGBTQIA+"],
    datasets: [{
        data: [7,23], 
        datalabels: {color:"white"},
        backgroundColor: [ '#BCAEC6', '#EC1E7B']
    }],
};

const optionsBar = {
    scales: {
        x: {
          ticks: {display: false},    
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {display: false},
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    plugins: {
            title: {
                text: ['Discrimination deters', 'seeking care'],
                color: '#283592',
                position: 'top',
                align: 'center',
                display: true,
                padding: {
                    bottom: 21
                },
                font: {
                    size: 16,
                    weight: 'bold',
                    lineHeight: 1.25
                }
            },
            legend: {
            labels: {
                generateLabels: function(chart) {
                var labels = chart.data.labels;
                var dataset = chart.data.datasets[0];
                var legend = labels.map(function(label, index) {
                   return {
                      datasetIndex: 0,
                      fillStyle: dataset.backgroundColor && dataset.backgroundColor[index],
                      strokeStyle: dataset.borderColor && dataset.borderColor[index],
                      lineWidth: dataset.borderWidth,
                      text: label
                   }
                });
                return legend;
             },
             boxWidth: 10, 
             boxHeight: 10,
            },
            position: 'bottom',
            align: "start",
            },
           
             datalabels: {
                font: {
                    weight: 'bold'
                },
                formatter: function(value, context) {
                  return  value + '%';
                }
              }
    },
    indexAxis: 'y',
};

const optionsPie =  { plugins:
            {
            legend : {
                display: true,
                position: 'bottom',
                align: 'start',
                labels : {
                    textAlign: 'left',
                    boxWidth: 10, 
                    boxHeight: 10,
                    font: {
                        size: 10,
                        weight: 400,
                    }},
                title: {
                    text: 'In 1012 US$',
                    display: true,
                    padding: 10,
                    position: 'bottom',
                }
                }
             },
             datalabels: {
                align: 'center',
             }
};



const DataWrapper = styled.div`
    background-color: #fff;
    padding: 16px;
    margin: 0;
    margin-left: 185px;
    margin-right: 145px;
    width: 290px;
    border-radius: 20px;
    position: relative;
`;


const DataFigure = styled.h2`
    font-family: ${props => props.theme.fonts.header.font_family[0]};
    width: max-content;
    font-weight: 700;
    font-size: 68px;
    line-height: 0.9;
    margin: 0 auto 20px auto;
    color: #283592;
`;

const DataText = styled.p`
    font-family: ${props => props.theme.fonts.text.font_family[0]};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    color: #283592;
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



const Data = () => {

 return (
    <DataWrapper>
        <Pie data={dataPie} options={optionsPie} plugins={[ChartDataLabels]}/>
        {/* <Bar data={dataBar} options={optionsBar} plugins={[ChartDataLabels]}/> */}
        {/* <DataFigure>71%</DataFigure>
        <DataText>Of providers reported Mental and behavioral health as the most significant need for the LGBTQ+ community</DataText> */}
        <DataButton>&#9432;</DataButton>
    </DataWrapper>
 )

};

export default Data;