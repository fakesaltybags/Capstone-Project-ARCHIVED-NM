import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table_name = 'Users'
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    user_id = event.get('id') 

    if not user_id:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'User ID is required'})
        }

    try:
        response = table.get_item(Key={'id': user_id})
        
        if 'Item' in response:
            return {
                'statusCode': 200,
                'body': json.dumps(response['Item'])
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'User not found'})
            }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
