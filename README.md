# Load-Balanced Environment using Docker and HAProxy

This repository contains the necessary files and configurations for setting up a load-balanced environment using Docker and HAProxy as part of the **Building Software Systems (CSO508)** assignment for Winter 2024-25.

## Deliverables

✔ **Dockerfiles and Code for both service containers**  
Located in their respective folders.

✔ **haproxy.cfg file and Dockerfile for HAProxy**  
Located in the `haproxy` folder.

✔ **Docker Hub Links** (Public URLs for the three images):
- **HAProxy** - [Link](https://hub.docker.com/layers/kashish0457/21je0457-haproxy/latest/images/sha256:2593506c3fb06c4d4944e87c6de2a0a6a4ff7f9e66531cab998236a581f703d0?uuid=224FBABB-E15F-4133-82EE-ED2C10F4C592)
- **Service 1** - [Link](https://hub.docker.com/layers/kashish0457/21je0457-service1/latest/images/sha256:6527d59d25ef73a07036b63cacb857c648adbd7ad39ead78116000dd391ee91f?uuid=224FBABB-E15F-4133-82EE-ED2C10F4C592)
- **Service 2** - [Link](https://hub.docker.com/layers/kashish0457/21je0457-service2/latest/images/sha256:4c10d9445eb51f1dd8bab7e95c70265abbe6e18528c5683152ef00fc47869b72?uuid=224FBABB-E15F-4133-82EE-ED2C10F4C592)

✔ **Logs or Screenshots demonstrating round-robin traffic distribution**
- Check the `haproxy_logs.txt` file in the repository.
- Screenshots and screen recording: [Google Drive Link](https://drive.google.com/drive/folders/18n0KWSwqKkdCXo3k7sWOuN0UFzHmNqxi?usp=sharing).

## Notes
- The HAProxy configuration ensures round-robin traffic distribution across the two services.
- The provided logs and screenshots verify the correct operation of load balancing.

---

**Author:** Kashish (21JE0457)
**Course:** Building Software Systems (CSO508)  
**Semester:** Winter 2024-25

