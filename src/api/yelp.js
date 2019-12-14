import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SdEXHQJ-S6R3MLnZggF4WS2ytVssA7xCNtyZka7OLHmjwoRw2TW-FazhWmZu_d3pnzYN5KUIKGUV6pBHl0hPvrz2ElvtDUIzEraty_jmQ12S3bLU15p7KpP6TcHlXXYx' 
    }
})

