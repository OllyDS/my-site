import json
import boto3
from typing import Dict
from quart import Blueprint, ResponseReturnValue, request

from constants import CV_S3_BUCKET, CV_FILE_NAME
from backend.lib.api_error import APIError

blueprint = Blueprint("cv", __name__)


# fetches the cv document from S3
@blueprint.get("/cv/")
async def fetch_cv() -> ResponseReturnValue:
    try:
        # initialise the s3 client
        s3 = boto3.resource('s3')

        # fetch the object from s3 using the bucket_name/file_name
        obj = s3.Object(CV_S3_BUCKET, CV_FILE_NAME)

        # convert the body of the response to json
        data = json.load(obj.get()['Body'])

        return { "data": data }, 200
    except:
        raise APIError(400, "Error fetching data from S3")


# updates the cv document in S3
@blueprint.post("/cv/")
async def update_cv() -> ResponseReturnValue:
    try:
        # read the json data being passed as params in the post request
        file_data: Dict[str, Dict[str, str]] = await request.get_json()

        # initialise the s3 client
        s3 = boto3.client('s3')

        # create a json object in s3, passing in the data, bucket name and file name
        s3.put_object(
            Body=json.dumps(file_data),
            Bucket=CV_S3_BUCKET,
            Key=CV_FILE_NAME
        )
        return { "success": f"file uploaded to bucket {CV_S3_BUCKET} successfully" }, 200
    except:
        raise APIError(400, f"Failed to upload file {CV_FILE_NAME} to s3")

