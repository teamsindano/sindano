import DataFigure from "../Components/Data/DataFigure";
import { data } from "./data";
import { Pie, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Source from "../Components/Source";

// ******* RECOMMENDATION *********
// It's unclear to me how this is different from a regular component and why it's in the utils directory.
// I would suggest just making components for each of the three cases below and then using them wherever
// this function was called. I'd also recommend NOT using the `id` to determine which one is rendered--
// by doing that, you are strongly coupling the component to the data, which defeats the purpose of
// putting all of that content / data in a central location (the purpose was to make it easier to change later
// on for someone maintaining this project).
const renderData = (id) => {

    const cardData =  data.unfoldDataCard.find(item => item.id === id); 
     

    if (id === 1 || id === 3) {
        return (
          <>
            <DataFigure data={cardData}/>
            <Source info={cardData.source} fontColor={"#283592"}/>
          </>
        )
      } 
      
      if (id === 2) {
        return ( 
          <>
            <Pie plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
            <Source info={cardData.source} fontColor={"#283592"}/>
          </>
        )
      }
      
      if (id=== 4) {
        return (
            <>
              <Bar plugins={[ChartDataLabels]} options={cardData.options} data={cardData.data}/>
              <Source info={cardData.source} fontColor={"#283592"}/>
            </>
        )
      }
};

export default renderData;