
## Covid 19 Dashboard

Demo: [https://covid19.tigerchen.dev/](https://covid19.tigerchen.dev/)

Data source: [https://disease.sh/](https://disease.sh/)

## RoadMap 

### Axios + cache (done)
Implement an axios cahce service using vanilla javascript. Cache the data in either localstorage or sessionstorage.

### Custom hook (done)
Make a generic covide api api by using react custom hook.

### Rechart integration (done)
[https://recharts.org/](https://recharts.org/)

### Barchart of top 10 coutries (done)
Display the top 10 cases coutries in a barchart. By default, it is sorted by "Total cases", use is able to change the concern like "Total deaths", "Active" etc.

### Area chart of selected country (done)
User is able to click on one of the top 10 countires and show three area charts of last 30 days's cases, deaths and Recovered.

### Geolocation lookup of user's country (done)
Find out user's locate country by using IP(fall back to google geocode api). And then display the country's coivd data in a card.

### World countries search (done)
User is able to search a country for covide data.

### Mertrial UI integration (done)
Need some advise from an UX colleague, layout and design to make the page more human readable. 

### Display user local country covid data on page top (in progress)
- Display total cases, deaths and today cases, death for user local country. 
- If the local country cannot be resovled. Let use choose the country from a dropdown. 
- local country data should be saved in to localstorage.

### Responsive UI implementation
Adapt the website to tablet and mobile device. Top ten countries barchar(web and tablet device width) and piechar(mobile device width)

### Storybook integration
[https://storybook.js.org/](https://storybook.js.org/)

### World map integration
Ultimate goal. Display a world map, color code countries by covid cases.