const ApiKey = 'dvTJLAYNgZId0MdkAsJBNZXhMTNRr9bG'; 
const apiKeyQueryParam = `api-key=${ApiKey}`
const endPoints = {
    getLatestNews: `/content/all/all.json?${apiKeyQueryParam}`,
    getFeaturedNews: `/content/nyt/business.json?${apiKeyQueryParam}`
}

export default endPoints;
