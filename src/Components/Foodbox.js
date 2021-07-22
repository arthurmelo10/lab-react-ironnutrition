import React from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json'

const FoodBox = (props) => {
    
    let foodJson = foods
    // const arrIndex = Math.floor(Math.random() * foodJson.length)
    for(let i = 0; i < foodJson.length; i+=1){
     
        return (
            <div>
                <h1>IronNutrition</h1>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={props.FoodBox(foodJson[i].image)} alt="img"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{props.FoodBox(foodJson[i].name)}</strong> <br/>
                                    <small>{props.FoodBox(foodJson[i].calories)}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value="1" />
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}    

export default FoodBox