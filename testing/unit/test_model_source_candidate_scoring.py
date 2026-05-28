"""Model source candidate scoring behavior."""

from server.api.v2.models import _score_source_candidate


def test_source_candidate_prefers_filename_in_url_over_nearby_context():
    model_info = {
        "filename": "Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors",
        "hash": None,
        "blake3": None,
        "sha256": None,
        "category": "text_encoders",
    }
    context = model_info["filename"]
    nearby_only_url = (
        "https://huggingface.co/Comfy-Org/HunyuanVideo_1.5_repackaged/"
        "resolve/main/split_files/text_encoders/qwen_2.5_vl_7b_fp8_scaled.safetensors"
    )
    filename_url = (
        "https://huggingface.co/lightx2v/Qwen-Image-Edit-2511-Lightning/"
        "resolve/main/Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors"
    )

    nearby_score, nearby_reasons = _score_source_candidate(
        nearby_only_url,
        context,
        model_info,
    )
    filename_score, filename_reasons = _score_source_candidate(
        filename_url,
        context,
        model_info,
    )

    assert "filename nearby" in nearby_reasons
    assert "filename in URL" in filename_reasons
    assert filename_score > nearby_score
