## ember-cli-body-parser

Adds body-parser to the ember-cli Express stub server allowing you to read ```POST/PUT``` data.

### Requires ember-cli >= 0.0.37, which is currently unreleased. ([Added here](https://github.com/stefanpenner/ember-cli/pull/1097))

It does NOT add body-parser if you are using the proxy server.  See relavent discussions:

* https://github.com/stefanpenner/ember-cli/issues/723
* https://github.com/stefanpenner/ember-cli/pull/725
* https://github.com/nodejitsu/node-http-proxy/issues/180


### Installation / Usage

From within your Ember CLI application (must be > 0.0.36), run the following:

```bash
npm install --save-dev ember-cli-body-parser
```

### References

* [body-parser](https://github.com/expressjs/body-parser)
