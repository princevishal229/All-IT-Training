console.log("This is my index js file");


// Initialize the news api parameter

// Grab the news container
let source = 'bbc-news';
let apiKey = '6d09e76fc0a0493489f5423d80d91152';


let newsAccordion = document.getElementById('newsAccordion');

// Create an aja get request
const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getResponseHeader('Content-type','application/json');
//   <div class="accordion" id="newsAccordion"> 

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
           console.log(articles);
           let newsHtml = ""
        articles.forEach(function(element,index) {

           // for (let news in articles){
            // console.log(articles[news]);
            // console.log(element,index)
            let news = `<div class="card">
        <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            <!--  Collapsible Group Item #1 -->
                         <b>  Breaking News ${index+1}:</b> ${element.title}

                    </button>    
                </h2>
            </div>
        
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
              <div class="card-body"> ${element["content"]}.<a href="${element['url']}" target= "_blank">Read more here</a> </div>
            </div>
        </div>`;
        newsHtml += news;
    });
        newsAccordion.innerHTML = newsHtml; 
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send()

