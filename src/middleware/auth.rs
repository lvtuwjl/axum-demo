use async_trait::async_trait;
use axum::{
    extract::FromRequestParts,
    http::{header, request::Parts, StatusCode},
};

use super::jwt::validate;

// An extractor that performs authorization.
pub struct Auth;

#[async_trait]
impl<S> FromRequestParts<S> for Auth
where
    S: Send + Sync,
{
    type Rejection = StatusCode;

    async fn from_request_parts(parts: &mut Parts, state: &S) -> Result<Self, Self::Rejection> {
        let auth_header = parts
            .headers
            .get(header::AUTHORIZATION)
            .and_then(|value| value.to_str().ok());

        match auth_header {
            Some(auth_header) if token_is_valid(auth_header) => Ok(Self),
            _ => Err(StatusCode::UNAUTHORIZED),
        }
    }
}

fn token_is_valid(token: &str) -> bool {
    validate(token.to_string()).is_ok()
}
