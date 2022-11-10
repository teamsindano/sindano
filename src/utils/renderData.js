import DataFigure from "../Components/Data/DataFigure";
import { data } from "./data";
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Source from "../Components/Source";


const renderData = (id) => {

    const cardData =  data.unfoldDataCard.find(item => item.id === id); 
     

    if (id === 1 || id === 3) {
        return (
          <>
            <DataFigure data={cardData}/>
            <Source info={cardData.source} fontColor={"blue"}/>
          </>
        )
      } 
      
      if (id === 2) {
        return ( 
          <>
            <Pie plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
            <Source info={cardData.source} fontColor={"blue"}/>
          </>
        )
      }
      
      if (id=== 4) {
        return (
            <>
              <Bar plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
              <Source info={cardData.source} fontColor={"blue"}/>
            </>
        )
      }
};

export default renderData;