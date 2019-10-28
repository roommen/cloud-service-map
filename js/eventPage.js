// Global variable to generate unique notification IDs
var notID = 0;

// Cloud services map
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
                    ["Amazon Comprehend", "Natural Language API <> LUIS"],
                    ["Amazon Lex", "Cloud Text-to-Speech <> Azure Speech Recognition"],
                    ["Machine Learning", "Cloud ML Services <> Azure ML"],
                    ["Amazon Polly", "Cloud Speech API <> Bing Speech API"],
                    ["Rekognition", "Cloud Vision API <> Bing Speech API "],
                    ["Amazon Translate", "Translation API <> Bing Speech API"],
                    ["Athena", "BigQuery <> Azure Data Lake Analytics"],
                    ["EMR", "Cloud DataProc <> Azure HDInsight"],
                    ["Kinesis", "Cloud Dataflow <> Azure Stream Analytics"],
                    ["QuickSight", "Google Data Studio <> PowerBI"],
                    ["Data Pipeline", "Cloud DataPrep <> Azure Data Factory"],
                    ["AWS Glue", "Cloud Composer <> Azure Data Catalog"],
                    ["IAM", "Cloud IAM <> Azure Active Directory"],
                    ["Cognito", "Firebase Authentication <> Azure Mobile SDK"],
                    ["Secrets Manager", "Cloud KMS <> Azure Key Vault"],
                    ["Key Management Service", "Cloud KMS <> Azure Key Vault"],
                    ["CloudHSM", "Cloud KMS <> Azure Key Vault"],
                    ["Directory Service", "Cloud Identity-Aware Proxy <> Azure Active Directory"],
                    ["WAF & Shield", "Cloud Armor <> Azure WAF/DDoS Protection"],
                    ["Artifact", "Cloud Security Command Center <> Azure Security & Compliance"],
                    ["Mobile Hub", "Cloud Mobile App <> Azure Mobile Apps"],
                    ["Device Farm", "Cloud Test Lab <> Xamarin Test Cloud "],
                    ["Amazon MQ", "Cloud Pub/Sub <> Queue Storage"],
                    ["Step Functions", "App Engine <> Microsoft Flow"],
                    ["Simple Notification Service", "Cloud Messaging <> Azure Notification Services"],
                    ["Simple Queue Service", "Cloud Pub/Sub  <> Service Bus queues"],
                    ["AWS Marketplace Subscriptions", "Cloud Launcher <> Azure MarketPlace"],
                    ["WorkMail", "G Suite <> Microsoft Office 365"],
                    ["WorkDocs", "G Suite <> Microsoft Office 365"],
                    ["IoT Core", "Cloud IoT Core <> Azure IoT Hub"]                   
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
            case "DynamoDB":
            case "ElastiCache":
            case "Amazon Redshift":
            case "Snowball":
            case "VPC":
            case "CloudFront":
            case "Route 53":
            case "API Gateway":
            case "Direct Connect":
            case "CodeCommit":
            case "CodeBuild":
            case "CloudWatch":
            case "AWS Auto Scaling":
            case "CloudFormation":
            case "CloudTrail":
            case "Config":
            case "Trusted Advisor":
            case "AWS Chatbot":
            case "Amazon Comprehend":
            case "Amazon Lex":
            case "Machine Learning":
            case "Amazon Polly":
            case "Rekognition":
            case "Amazon Translate":
            case "Athena":
            case "EMR":
            case "Kinesis":
            case "QuickSight":
            case "Data Pipeline":
            case "AWS Glue":
            case "IAM":
            case "Cognito":
            case "Secrets Manager":
            case "Key Management Service":
            case "CloudHSM":
            case "Directory Service":
            case "WAF & Shield":
            case "Artifact":
            case "Mobile Hub":
            case "Device Farm":
            case "Amazon MQ":
            case "Step Functions":
            case "Simple Notification Service":
            case "Simple Queue Service":
            case "AWS Marketplace Subscriptions":
            case "WorkMail":
            case "WorkDocs":
            case "IoT Core":
                options.message = csm.get(selectionText);
                break;
            default:
                options.message = csm.get("Equivalent service not found!");
                break;
        }
        chrome.notifications.create("id"+ ++notID, options);
    }
});
