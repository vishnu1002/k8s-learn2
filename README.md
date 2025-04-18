# Kubernetes Microservices Demo

This project demonstrates a simple microservices architecture deployed on Kubernetes. It showcases how to containerize multiple services and orchestrate them using Kubernetes, with Nginx acting as a reverse proxy and load balancer.

## Architecture Overview

```mermaid
graph TD
    Client[Client] --> LB[Load Balancer<br/>Nginx:80]
    LB --> Homepage[Homepage Service<br/>Port:3000]
    LB --> Payment[Payment Service<br/>Port:3001]
    LB --> Orders[Orders Service<br/>Port:3002]
```

## Services

### 1. Homepage Service

- **Access**: Root path `/`
- **Purpose**: Serves the main landing page
- **Port**: 3000

### 2. Payment Service

- **Access**: `/payment`
- **Purpose**: Handles payment-related functionality
- **Port**: 3001

### 3. Orders Service

- **Access**: `/orders`
- **Purpose**: Manages order processing
- **Port**: 3002

### 4. Nginx Load Balancer

- **Port**: 80
- **Purpose**:
  - Acts as reverse proxy
  - Routes requests to appropriate services
  - Load balancing

## Kubernetes Resources

Each service is deployed with:

- Deployment (manages pods)
- Service (internal networking)
- Resource limits:
  - Memory: 64Mi
  - CPU: 250m

### Service URLs

- Homepage: `http://<load-balancer-ip>/`
- Payment: `http://<load-balancer-ip>/payment`
- Orders: `http://<load-balancer-ip>/orders`

## Project Structure

```
k8s-learn2/
├── homepage/          # Homepage service
├── payment/          # Payment service
├── orders/           # Orders service
└── nginx/            # Nginx configuration
```

