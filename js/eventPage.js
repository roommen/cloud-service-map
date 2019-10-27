// Global variable to generate unique notification IDs
var notID = 0;

// Global service map
var csm = new Map([["EC2", "Compute Engine <> Azure Virtual Machine"],
                    ["ECR", "Google Container Registry <> Azure Container Registry"],
                    ["ECS", "Google Kubernetes Engine <> Azure Container Instances"],
                    ["EKS", "Google Kubernetes Engine <> Azure Container Instances"],
                    ["Lambda", "Google Cloud Functions <> Azure Functions"],
                    ["Elastic Beastalk", "App Engine <> Azure Web Apps"],
                    ["S3", "Google Cloud Storage <> Azure Blob Storage"],
                    ["EFS", "Google File Store <> Azure File Storage"],
                    ["S3 Glacier", "Archival Storage <> Azure Cool Storage"],
                    ["RDS", "Google Cloud SQL <> Azure SQL Database"],
                    ["DynamoDB", "Cloud DataStore <> Azure CosmosDB"],
                    ["ElastiCache", "Cloud MemoryStore <> Azure RedisCache"],
                    ["Amazon Redshift", "BigQuery <> Azure SQL Data Warehouse"],
                    ["Snowball", "Transfer Appliance <> Azure Data Box"],
                    ["VPC", "Cloud Virtual Network <> Azure VNet"],
                    ["CloudFront", "Cloud CDN <> Azure CDN"],
                    ["Route 53", "Cloud DNS <> Azure DNS"],
                    ["API Gateway", "Cloud Endpoints <> Azure API Management"],
                    ["Direct Connect", "Cloud InterConnect <> Azure Express Route"],
                    ["CodeCommit", "Source Repositories <> Azure Repos"],
                    ["CodeBuild", "CloudBuild <> Azure Pipelines"],
                    ["CloudWatch", "Google StackDriver <> Log Analytics"],
                    ["AWS Auto Scaling", "Cloud Auto Scaler <> Azure Autoscale"],
                    ["CloudFormation", "Cloud Deployment Manager <> Azure Building Blocks"],
                    ["CloudTrail", "Cloud Monitoring/Logging <> Application Insights"],
                    ["Config", "Cloud Security Scanner <> Azure Portal"],
                    ["Trusted Advisor", "GCP Security <> Azure Advisor"],
                    ["AWS Chatbot", "Dialogflow <> Azure Bot Service"],
                    
])

// Generate the context menu.
var contextMenuItem = {
    id: "serviceMap",
    title: "Show equivalent GCP <> Azure",
    contexts: ["selection"]
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem)
});

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "serviceMap"){
        var options = {
            type: "basic",
            iconUrl: "images/csm-trans48.png",
            title: "Cloud Service Mapper",
            message: "",
        };
        selectionText = clickData.selectionText;
        switch (selectionText) {
            case "EC2":
            case "ECR":
            case "ECS":
            case "EKS":
            case "Lambda":
            case "Elastic Beanstalk":
            case "S3":
            case "EFS":
            case "S3 Glacier":
            case "RDS":
                options.message = csm.get(selectionText);
                break;
            default:
                options.message = csm.get("Equivalent service not found!");
                break;
        }
        chrome.notifications.create("id"+ ++notID, options);
    }
});
