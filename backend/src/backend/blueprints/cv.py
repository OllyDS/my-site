import json
from typing import Dict

import boto3
from quart import Blueprint, ResponseReturnValue, request, make_response
from quart_cors import route_cors

from backend.lib.api_error import APIError
from constants import CV_PDF_FILE_NAME, CV_JSON_FILE_NAME, CV_S3_BUCKET

blueprint = Blueprint("cv", __name__)


@blueprint.get("/cv/json/")
@route_cors(
    allow_headers=["content-type"],
    allow_methods=["GET"],
    allow_origin=["*"],
)
async def fetch_cv_json() -> ResponseReturnValue:
    """Returns the CV in JSON format from S3"""
    try:
        # initialise the s3 client
        s3 = boto3.resource("s3")

        # fetch the object from s3 using the bucket_name/file_name
        obj = s3.Object(CV_S3_BUCKET, CV_JSON_FILE_NAME)

        # convert the body of the response to json
        data = json.load(obj.get()["Body"])

        return {"data": data}, 200
    except:
        raise APIError(400, "Error fetching data from S3")


@blueprint.post("/cv/")
async def update_cv_json() -> ResponseReturnValue:
    """Updates the CV JSON document in S3"""
    try:
        # read the json data being passed as params in the post request
        file_data: Dict[str, Dict[str, str]] = await request.get_json()

        # initialise the s3 client
        s3 = boto3.client("s3")

        # create a json object in s3
        s3.put_object(Body=json.dumps(file_data), Bucket=CV_S3_BUCKET, Key=CV_JSON_FILE_NAME)
        return {"success": f"file uploaded to bucket {CV_S3_BUCKET} successfully"}, 200
    except:
        raise APIError(400, f"Failed to upload file {CV_JSON_FILE_NAME} to s3")


@blueprint.get("/cv/pdf/")
@route_cors(
    allow_headers=["content-type"],
    allow_methods=["GET"],
    allow_origin=["*"],
)
async def fetch_cv_pdf() -> ResponseReturnValue:
    """Fetches the CV in PDF format"""
    try:
        # initialise the s3 client
        s3 = boto3.resource("s3")

        # fetch the pdf from s3 using the bucket_name/file_name
        obj = s3.Object(CV_S3_BUCKET, CV_PDF_FILE_NAME).get()

        # Create PDF from streamed data
        response = await make_response(obj['Body'].read())

        # Specify the content-type header
        response.headers['Content-Type'] = 'application/pdf'

        return response, 200

    except:
        raise APIError(400, "Error fetching PDF from S3")