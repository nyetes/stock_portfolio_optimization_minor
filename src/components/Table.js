import React from 'react';


function Table({expReturn,risk}) {
    return(
        <div class='tablecontainer'>
        <h1>Key Data:</h1>
        <table class="tablecontent">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="Title">Expected Return(Daily)</td>
                         <td class="Percentage">{(expReturn *100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td class="Title">Expected Return(Annually)</td>
                        <td class="Percentage">{(expReturn * 250 * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td class="Title">Risk(Daily)</td>
                     <td class="Percentage">{(risk * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td class="Title">Annual Risk</td>
                     <td class="Percentage">{(risk * 100 * Math.sqrt(250)).toFixed(2)}%</td>
                </tr>
            </tbody>

        </table>

    </div>
    );
}
  



  export default Table;