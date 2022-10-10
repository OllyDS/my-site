from backend.run import app


async def test_health_check_endpoint() -> None:
    test_client = app.test_client()
    response = await test_client.get("/health/")
    assert (await response.get_json())["health"] == "ok"
