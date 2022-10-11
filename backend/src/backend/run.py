from quart import Quart, ResponseReturnValue

from backend.blueprints.health_check import blueprint as health_blueprint
from backend.blueprints.cv import blueprint as cv_blueprint
from backend.lib.api_error import APIError


app = Quart(__name__)
app.register_blueprint(health_blueprint)
app.register_blueprint(cv_blueprint)


@app.errorhandler(APIError)
async def handle_api_error(error: APIError) -> ResponseReturnValue:
    return { 'message': error.message }, error.status_code


@app.errorhandler(500)
async def handle_generic_error(error: Exception) -> ResponseReturnValue:
    return {"code": "INTERNAL_SERVER_ERROR"}, 500

