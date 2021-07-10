const ApiKey = 'dvTJLAYNgZId0MdkAsJBNZXhMTNRr9bG'; 
const apiKeyQueryParam = `api-key=${ApiKey}`
const endPoints = {
    getLatestNews: `articlesearch.json?${apiKeyQueryParam}&q=latest`,
    getFeaturedNews: `articlesearch.json?${apiKeyQueryParam}&q=featured`
}

export default endPoints;
