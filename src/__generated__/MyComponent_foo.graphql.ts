/**
 * @generated SignedSource<<5143cafc9f4358246b83164b18a2b5bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyComponent_foo$data = {
  readonly field: string | null | undefined;
  readonly " $fragmentType": "MyComponent_foo";
};
export type MyComponent_foo$key = {
  readonly " $data"?: MyComponent_foo$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyComponent_foo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyComponent_foo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    }
  ],
  "type": "Foo",
  "abstractKey": null
};

(node as any).hash = "b5ae738786ebd65c813975dbf72e6c7f";

export default node;
