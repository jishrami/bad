import requests

# Define your Printful API key
printful_api_key = 'v7TNGYTAnIfwZl1fxQmeFQkbmM2pbP0CRGfS6iZa'

# Base URL for the Printful API
base_url = 'https://api.printful.com'

# Define endpoints for common actions
endpoints = {
    'products': '/products',
    'variants': '/products/variants',
    'orders': '/orders',
}

# Helper function to make authenticated requests to the Printful API
def make_printful_request(endpoint, method='GET', data=None):
    headers = {
        'Authorization': f'Bearer {printful_api_key}',
        'Content-Type': 'application/json',
    }
    url = f'{base_url}{endpoint}'
    
    if method == 'GET':
        response = requests.get(url, headers=headers)
    elif method == 'POST':
        response = requests.post(url, headers=headers, json=data)
    elif method == 'PUT':
        response = requests.put(url, headers=headers, json=data)
    elif method == 'DELETE':
        response = requests.delete(url, headers=headers)
    else:
        raise ValueError(f'Unsupported HTTP method: {method}')
    
    return response.json()

# Example: Get a list of products
def get_products():
    endpoint = endpoints['products']
    response_data = make_printful_request(endpoint)
    return response_data

# Example: Create an order
def create_order(order_data):
    endpoint = endpoints['orders']
    response_data = make_printful_request(endpoint, method='POST', data=order_data)
    return response_data

# Example usage
if __name__ == '__main__':
    # Get a list of products
    products = get_products()
    print(products)
    
    # Create an order (you would need to provide order_data)
    order_data = {
        # Define your order data here
    }
    created_order = create_order(order_data)
    print(created_order)
