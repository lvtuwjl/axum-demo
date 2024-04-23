FROM rust:latest as builder
LABEL authors="Jelly"

WORKDIR /app
COPY . .

RUN apt-get update && apt-get install musl musl-dev musl-tools

RUN mkdir ~/.cargo/ && touch ~/.cargo/config \
    && echo '[source.crates-io]' > ~/.cargo/config \
    && echo 'registry = "https://github.com/rust-lang/crates.io-index"'  >> ~/.cargo/config \
    && echo "replace-with = 'tuna'"  >> ~/.cargo/config \
    && echo '[source.tuna]'   >> ~/.cargo/config \
    && echo 'registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"'  >> ~/.cargo/config \
    && echo '[net]'   >> ~/.cargo/config \
    && echo 'git-fetch-with-cli = true'   >> ~/.cargo/config \
    && echo '' >> ~/.cargo/config

# RUN rustup target add x86_64-unknown-linux-musl
# RUN cargo build --release --target x86_64-unknown-linux-musl

RUN rustup target add aarch64-unknown-linux-musl
RUN cargo build --release --target aarch64-unknown-linux-musl

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/target/aarch64-unknown-linux-musl/release/axum-demo .

EXPOSE 8087

ENTRYPOINT ["./axum-demo", "startserver", "-p", "8087"]