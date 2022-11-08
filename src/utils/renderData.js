import DataFigure from "../Components/Data/DataFigure";
import { data } from "./data";
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const renderData = (id) => {

    const cardData =  data.unfoldDataCard.find(item => item.id === id); 
     

    if (id=== 1 || id === 3) {
        return (
            <DataFigure data={cardData}/>
        )
      } 
      
      if (id === 2) {
        return ( 
            <Pie plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
        )
      }
      
      if (id=== 4) {
        return (
            <Bar plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
        )
      }
};

export default renderData;