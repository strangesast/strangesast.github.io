from urllib.request import Request, urlopen
import json
import os.path

url = 'https://api.github.com/graphql'
cwd = os.path.dirname(__file__)
with open(os.path.join(cwd, '../token'), 'r') as f:
    token = f.read().strip()
headers = {'Authorization': 'Bearer {}'.format(token)}
keys = [
  'name',
  'url',
  'description',
  'homepageUrl',
  'pushedAt',
  'updatedAt'
]
query = '''
{{
  user(login: "strangesast") {{
    repositories(first:100) {{
      pageInfo {{
        hasNextPage
      }}
      edges {{
        node {{
          {}
          owner {{
            login
          }}
          ref(qualifiedName: "gh-pages") {{
            id
          }}
        }}
      }}
    }}
  }}
}}
'''.format('\n'.join(keys))
payload = json.dumps({'query': query}).encode('utf-8')
req = Request(url, payload, headers=headers, method='POST')
res = urlopen(req, timeout=5)
if res.status < 200 or res.status >= 400:
    raise Exception('request failed (code {})'.format(res.status))
data = json.loads(res.read())

def iter_edges(g):
    for edge in g['edges']:
        yield edge['node']

repositories = data['data']['user']['repositories']
reworked_data = [{ key: node[key] for key in keys } for node in iter_edges(repositories) if node.get('ref') != None and node.get('owner').get('login') == 'strangesast']

path = os.path.join(cwd, '../data/repositories.json')
with open(path, 'w') as f:
    f.write(json.dumps(reworked_data, indent=2))
