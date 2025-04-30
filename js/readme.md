## README

The files in this directory are duplicates of CSS files in version directories on
the `master` branch.

The only purpose for having these files here is to allow Netlify preview builds
that to render properly while building from version branches. Netlify builds
from version branches (like `5.0`) and looks for these files at the top level of the
repository, whereas when a production build is created, this folder and its
files are referenced under the relevant version branch. Without this folder and
its files at the top level, Netlify builds on version branches will not render
properly because they'll be looking for them here instead of under a version.

Not all files in the version branches `js` folder are duplicated here, but rather only those
needed by the Netlify build.

Here is an example of the generated script `src` links on production docs:

<script src="https://docs.thoughtspot.com/4.5/js/customscripts.js"></script>

Here is an example of the generated script `src` links on Netlify built docs
 from a version branch:

<script src="https://docs.thoughtspot.com/js/customscripts.js"></script>
