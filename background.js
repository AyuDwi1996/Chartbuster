/**
 * Plays audio files from extension service workers
 */

async function addComponentToImages() {
  // Find all images on the page
  let images=[];
  images = document.getElementsByTagName("img");
  // Loop through all images and add the component below each one
  for (let i = 0; i < images.length; i++) {
    // Create the component element
    if(i!=7)continue;
    const component = document.createElement("div");
    component.innerHTML = `
      <div class="card">
            <div class="welcome"><span>Welcome to More Accessible Data Charts</span></div>
            <div class="summary">
            <span class="summary-heading">Summary:</span>
            <span>This is a line chart representing trend of total movies by each year from 1940 till 2020</span>
            </div>
            <div class="div-tbl">
            <p>here is the tabular representation</p>
            <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Shows/Movie on Netflix</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2010</td>
                <td>78</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>113</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>147</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>178</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>203</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>227</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>337</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>567</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>789</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>813</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>754</td>
              </tr>
              </tbody>
            </table>
            </div>
            <div class="div-btn">
            <span>click to the button for sound effect of the trend</span>
            <button class="play-btn">Play</button>
            </div>
      </div>
    `;

    // Add the component element below the image
    images[i].after(component);

    // Add the CSS styles for the component element
    const style = document.createElement("style");
    style.innerHTML = `
    .welcome{
      background:rgb(88, 129, 87);
      width:100%;
      font-size: 20px;
      font-weight:bold;
      border-bottom:3px;
    }
      .card {
        font-family: 'Helvetica Neue', sans-serif; 
        display:flex;
        flex-direction: column;
        justify-content:stretch;
        align-items:center;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        background:rgb(218, 215, 205);
      }
      .summary{
        display:flex;
        justify-content:center;
        align-items:center;
        background:rgb(163, 177, 138);
        width: 100%;
      }
      .summary-heading{
      font-size: 16px;
      font-weight:bold;
      }
      .div-tbl{
        display:flex;
        flex-direction: column;
        justify-content:center;
      }
      .play-btn {
        background-color: rgb(88, 129, 87);
        border: none;
        color: white;
        padding: 7px 14px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
      }
      table {
        border-collapse: collapse;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        border-radius: 5px;
      }
      
      th,
      td {
        padding: 10px;
        background-color: rgba(255,255,255,0.2);
      }
      
      th {
        text-align: left;
      }
      
      thead {
        background:rgb(163, 177, 138);
        th {
          background-color: #55608f;
        }
      }
      
      tbody {
        tr {
          &:hover {
            background-color: rgba(255,255,255,0.3);
          }
        }
        td {
          position: relative;
          &:hover {
            &:before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              top: -9999px;
              bottom: -9999px;
              background-color: rgba(255,255,255,0.2);
              z-index: -1;
            }
          }
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add a click event listener to the play button
  const playButtons = document.querySelectorAll(".play-btn");
  playButton.addEventListener('pointerup', function(event) {
    let audio = document.querySelector('audio');

    // User interacted with the page. Let's play audio...
    audio.play()
    .then(_ => { /* Set up media session... */ })
    .catch(error => { console.log(error) });
});
}

// Use the chrome.action.onClicked API to add a listener for when the extension button is clicked
chrome.action.onClicked.addListener(async (tab) => {
  // Use the chrome.scripting API to execute the content script on the active tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addComponentToImages,
  });
});
