from backend.run import app


async def test_get_first_name() -> None:
    test_client = app.test_client()
    response = await test_client.get("/cv/")

    assert (await response.get_json())["data"]["first_name"] == "Oliver"

async def test_get_github_url() -> None:
    test_client = app.test_client()
    response = await test_client.get("/cv/")

    assert (await response.get_json())["data"]["github_url"] == "https://github.com/OllyDS"

