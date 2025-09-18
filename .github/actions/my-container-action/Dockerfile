FROM ubuntu:22.04
LABEL maintainer="yourname@example.com"

# Install any dependencies (example: curl)
RUN apt-get update && apt-get install -y curl

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
