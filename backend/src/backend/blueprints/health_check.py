from quart import Blueprint, ResponseReturnValue

blueprint = Blueprint("health", __name__)


@blueprint.get("/health/")
async def health() -> ResponseReturnValue:
    return {"health": "ok"}
