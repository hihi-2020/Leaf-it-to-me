import React from "react";
import { connect } from 'react-redux'

const IndividualPlant = (props) => {
  const name = props.match.params.name;

  return (
    <div>

      {props.plants
        .filter((plant) => plant.common_name == name)
        .map((plant) => {
          return (
            <div key={plant.id}>
              <div className="individ-plant-main">
                <h2 className="commonName">Name: {plant.common_name}</h2>
                <h3 className="commonName">Species Name{plant.species_name}</h3>

                <div className="careDetailWrapper"></div>
              
              <div className="careDetail">               
               {/* <img src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}/> */}
               <img src={plant.img}/>
                <ul className="">
                  
                  <li>{plant.water}</li>
                  <li>{plant.light}</li>
                  <li>{plant.temp}</li>
                  <li>{plant.humidity}</li>
                  <li>{plant.soil}</li>
                  <li>{plant.lvl}</li>
                  <li>{plant.more}</li>
                </ul>              
                <button className="" href="">
                Add Plant to Profile
              </button>
              </div>


            </div>
            </div>
          );
        })}
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
  };
}
export default connect(mapStateToProps)(IndividualPlant);

