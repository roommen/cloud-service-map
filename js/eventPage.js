// Global variable to generate unique notification IDs
var notID = 0;

// Cloud services map
var csm = new Map([["EC2", "Compute Engine <> Azure Virtual Machine <> IBM Cloud Virtual Servers"],
                    ["ECR", "Google Container Registry <> Azure Container Registry <> Container Registry"],
                    ["ECS", "Google Kubernetes Engine <> Azure Container Instances <> IBM Cloud Kubernetes Service"],
                    ["EKS", "Google Kubernetes Engine <> Azure Container Instances <> IBM Cloud Kubernetes Service"],
                    ["Lambda", "Google Cloud Functions <> Azure Functions <> IBM Cloud Functions (OpenWhisk)"],
                    ["Elastic Beastalk", "App Engine <> Azure Web Apps <> IBM Cloud Foundry"],
                    ["S3", "Google Cloud Storage <> Azure Blob Storage <> IBM Cloud Object Storage"],
                    ["EFS", "Google File Store <> Azure File Storage <> IBM Cloud File Storage"],
                    ["S3 Glacier", "Archival Storage <> Azure Cool Storage <> IBM Cloud Object Storage"],
                    ["RDS", "Google Cloud SQL <> Azure SQL Database <> Databases for PostgreSQL / Compose for MySQL / Db2"],
                    ["DynamoDB", "Cloud DataStore <> Azure CosmosDB <> IBM Cloudant"],
                    ["ElastiCache", "Cloud MemoryStore <> Azure RedisCache <> Databases for Redis"],
                    ["Amazon Redshift", "BigQuery <> Azure SQL Data Warehouse <> Db2 Warehouse"],
                    ["Snowball", "Transfer Appliance <> Azure Data Box <> IBM Lift CLI"],
                    ["VPC", "Cloud Virtual Network <> Azure VNet <> IBM Cloud Virtual Private Cloud"],
                    ["CloudFront", "Cloud CDN <> Azure CDN <> IBM Cloud Content Delivery Network"],
                    ["Route 53", "Cloud DNS <> Azure DNS <> IBM Cloud Domain Name Service"],
                    ["API Gateway", "Cloud Endpoints <> Azure API Management <> IBM API Connect"],
                    ["Direct Connect", "Cloud InterConnect <> Azure Express Route <> IBM Secure Gateway"],
                    ["CodeCommit", "Source Repositories <> Azure Repos <> Gitlab Community Edition"],
                    ["CodeBuild", "CloudBuild <> Azure Pipelines <> IBM Cloud Continuous Delivery"],
                    ["CloudWatch", "Google StackDriver <> Log Analytics <> IBM Cloud Monitoring"],
                    ["AWS Auto Scaling", "Cloud Auto Scaler <> Azure Autoscale <> Auto scale for IBM Cloud Virtual Servers"],
                    ["CloudFormation", "Cloud Deployment Manager <> Azure Building Blocks <> IBM Cloud Schematics"],
                    ["CloudTrail", "Cloud Monitoring/Logging <> Application Insights <> IBM Cloud Monitoring"],
                    ["Config", "Cloud Security Scanner <> Azure Portal <> Vulnerability Advisor"],
                    ["Trusted Advisor", "GCP Security <> Azure Advisor <> IBM Cloud Security Advisor"],
                    ["AWS Chatbot", "Dialogflow <> Azure Bot Service <> IBM Watson Assistant"],
                    ["Amazon Comprehend", "Natural Language API <> LUIS <> IBM Watson Natural Language Understanding"],
                    ["Amazon Lex", "Cloud Text-to-Speech <> Azure Speech Recognition <> IBM Watson Speech to Text"],
                    ["Machine Learning", "Cloud ML Services <> Azure ML <> IBM Watson Machine Learning"],
                    ["Amazon Polly", "Cloud Speech API <> Bing Speech API <> IBM Watson Text to Speech"],
                    ["Rekognition", "Cloud Vision API <> Bing Speech API <> IBM Watson Visual Recognition"],
                    ["Amazon Translate", "Translation API <> Bing Speech API <> IBM Watson Language Translator"],
                    ["Athena", "BigQuery <> Azure Data Lake Analytics <> IBM Cloud SQL Query"],
                    ["EMR", "Cloud DataProc <> Azure HDInsight <> IBM Analytics Engine"],
                    ["Kinesis", "Cloud Dataflow <> Azure Stream Analytics <> IBM Streaming Analytics"],
                    ["QuickSight", "Google Data Studio <> PowerBI <> IBM Cognos Dashboard Embedded"],
                    ["Data Pipeline", "Cloud DataPrep <> Azure Data Factory <> IBM InfoSphere Virtual Data Pipeline (On Cloud)"],
                    ["AWS Glue", "Cloud Composer <> Azure Data Catalog <> IBM Data Stage (On Cloud)"],
                    ["IAM", "Cloud IAM <> Azure Active Directory <> IAM"],
                    ["Cognito", "Firebase Authentication <> Azure Mobile SDK <> IBM Cloud App ID"],
                    ["Secrets Manager", "Cloud KMS <> Azure Key Vault <> IBM Key Protect"],
                    ["Key Management Service", "Cloud KMS <> Azure Key Vault <> IBM Key Protect"],
                    ["CloudHSM", "Cloud KMS <> Azure Key Vault <> IBM Cloud HSM"],
                    ["Directory Service", "Cloud Identity-Aware Proxy <> Azure Active Directory <> Identity Providers"],
                    ["WAF & Shield", "Cloud Armor <> Azure WAF/DDoS Protection <> Cloud Internet Services"],
                    ["Artifact", "Cloud Security Command Center <> Azure Security & Compliance <> IBM Cloud Compliance Portal"],
                    ["Mobile Hub", "Cloud Mobile App <> Azure Mobile Apps <> IBM Mobile Foundation"],
                    ["Device Farm", "Cloud Test Lab <> Xamarin Test Cloud <> Bitbar Testing Cloud"],
                    ["Amazon MQ", "Cloud Pub/Sub <> Queue Storage <> IBM MQ"],
                    ["Step Functions", "App Engine <> Microsoft Flow <> IBM App Connect"],
                    ["Simple Notification Service", "Cloud Messaging <> Azure Notification Services <> Push Notifications"],
                    ["Simple Queue Service", "Cloud Pub/Sub  <> Service Bus queues <> IBM Event Streams"],
                    ["AWS Marketplace Subscriptions", "Cloud Launcher <> Azure MarketPlace <> IBM Cloud Catalog"],
                    ["WorkMail", "G Suite <> Microsoft Office 365 <> IBM Verse"],
                    ["WorkDocs", "G Suite <> Microsoft Office 365 <> Box"],
                    ["IoT Core", "Cloud IoT Core <> Azure IoT Hub <> IBM Watson IoT Platform"]                   
])

// Generate the context menu.
var contextMenuItem = {
    id: "serviceMap",
    title: "Show equivalent GCP <> Azure <> IBM Cloud",
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
