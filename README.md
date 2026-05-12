# coolwebsite

Personal blog built with Pelican.

## Local run

```powershell
python -m venv .venv
\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
pelican -s pelicanconf.py -o output
cd output
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Content

- Pages live in `content/pages/`
- Posts live in `content/posts/`
- Templates live in `theme/templates/`

## Build for publish

```powershell
pelican -s publishconf.py -o output
```
