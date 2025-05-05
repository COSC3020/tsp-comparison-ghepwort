import json
import matplotlib.pyplot as plt

# Load the JSON file
with open('tsp_results.json') as tsp_results:
    data = json.load(tsp_results)

# Extract Held-Karp data
hk_nodes = [entry['nodes'] for entry in data['heldKarp']]
hk_result = [entry['result'] for entry in data['heldKarp']]
hk_times = [entry['time'] for entry in data['heldKarp']]

# Extract Local Search data
ls_nodes = [entry['nodes'] for entry in data['localSearch']]
ls_result = [entry['result'] for entry in data['localSearch']]
ls_times = [entry['time'] for entry in data['localSearch']]

# First plot: Nodes vs Execution Time
plt.figure(figsize=(10, 6))
plt.plot(hk_nodes, hk_times, label='Held-Karp', marker='o')
plt.plot(ls_nodes, ls_times, label='Local Search', marker='x')
plt.title('TSP Algorithm Time Complexity')
plt.xlabel('Number of Nodes')
plt.ylabel('Execution Time (ms)')
plt.legend()
plt.grid(True)
plt.show()

# Second plot: Nodes vs Tour Length
plt.figure(figsize=(10, 6))
plt.plot(hk_nodes, hk_result, label='Held-Karp', marker='o')
plt.plot(ls_nodes, ls_result, label='Local Search', marker='x')
plt.title('TSP Algorithm Tour Length vs Input Size')
plt.xlabel('Number of Nodes')
plt.ylabel('Tour Length (Cost)')
plt.legend()
plt.grid(True)
plt.show()
