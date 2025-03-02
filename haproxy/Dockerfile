# Use the official HAProxy image
FROM haproxy:2.8

# Copy the HAProxy configuration file
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

# Expose port 80
EXPOSE 80

# Start HAProxy
CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]
