## README

The files in this directory are duplicates of CSS files in version directories
on the `master` branch.

The only purpose for having this file here is to allow Netlify preview builds to
render properly while building from version branches. Netlify builds from
version branches (like `5.0`) and looks for these image files at the top level
of the repository, whereas when a production build is created, this folder and
its files are referenced under the relevant version branch. Without this folder
and its files at the top level, Netlify builds on version branches will not
render properly because they'll be looking for them here instead of under a
version directory.

Specifically, Netlify is using only the `company_logo.png` image
file in this directory at the top level.

Here is an example of the generated CSS stylesheet links on production docs:

<img style="width:100px;" src="https://docs.thoughtspot.com/4.5/images/company_logo.png" alt="Company logo">

Here is an example of the generated CSS stylesheet links on Netlify built docs
from a version branch:

<img style="width:100px;" src="https://docs.thoughtspot.com/images/company_logo.png" alt="Company logo">
