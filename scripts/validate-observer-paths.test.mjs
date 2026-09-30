import test from 'node:test';
import assert from 'node:assert/strict';
import {OBSERVER_PATHS,validateObserverPaths} from './validate-observer-paths.mjs';
test('observation PRs accept only their eight data files and reject source, workflows and traversal',()=>{assert.doesNotThrow(()=>validateObserverPaths([...OBSERVER_PATHS]));for(const path of ['README.md','.github/workflows/mission-control-observer.yml','scripts/refresh-mission-control.mjs','docs/data/../index.html','docs/data/secrets.json'])assert.throws(()=>validateObserverPaths([path]));});
