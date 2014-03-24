# Create your views here.

from django.shortcuts import render_to_response
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.http import HttpResponse, HttpResponseRedirect
from datuisite.datui.models import *
import json, time, random
from weibo import APIClient


APP_KEY = '41634853'
APP_SECRET = 'ccd5f9d2d701bba17644c39d95fd5727'
CALLBACK_URL = 'http://127.0.0.1:8000/callback/'
LOGOUT_URL = 'http://127.0.0.1:8000/'
_COOKIE = 'cookies'

def _make_cookie(response, uid, token, expires_in):
    expires = str(int(expires_in))
    cookie = '%s:%s:%s' % (str(uid), expires, str(token))
    response.set_cookie(_COOKIE, cookie, expires=expires_in)

def _check_cookie(request):
    try:
        cookie = request.COOKIES[_COOKIE]
        uid, expires, token = cookie.split(':')
        if int(expires) < time.time():
            return
        u={'uid':uid, 'expires':int(expires), 'token':token}
        return u
    except BaseException:
        pass


def login(request):
    client = APIClient(app_key=APP_KEY, app_secret=APP_SECRET, redirect_uri=CALLBACK_URL)
    url = client.get_authorize_url()
    return HttpResponseRedirect(url)

def callback(request):
    code = request.GET['code']
    client = APIClient(app_key=APP_KEY, app_secret=APP_SECRET, redirect_uri=CALLBACK_URL)
    r = client.request_access_token(code)
    client.set_access_token(r.access_token, r.expires_in)


    uinfo = client.users.show.get(access_token=r.access_token, uid=r.uid)
    response = render_to_response('index.html', {'login':True, 'uinfo':uinfo})
    _make_cookie(response, r.uid, r.access_token, r.expires_in)
    return response

    # return HttpResponse("it works!")

def logout(request):
    response = render_to_response('index.html')
    response.set_cookie(_COOKIE, max_age=0)
    return response

def index(request):

    u = _check_cookie(request)
    if not u:
        return render_to_response('index.html')
    client = APIClient(app_key=APP_KEY, app_secret=APP_SECRET, redirect_uri=CALLBACK_URL)
    client.set_access_token(u['token'], u['expires'])
    try:
        uinfo = client.users.show.get(access_token=u['token'], uid=u['uid'])
        return render_to_response('index.html', {'login':True, 'uinfo':uinfo})
    except:
        pass

    return render_to_response('index.html')


def search(request):
    if 'keyword' in request.GET:
        keyword = request.GET['keyword']
        if not keyword:
            users = []
        else:
            users = User.objects.filter(keyword__contains=keyword)

        return render_to_response('search.html', {'users': users})

    else:
        return render_to_response('search.html', {'users': []})

def search_key(request, keyword):
    if not keyword:
        users = []
    else:
        users = User.objects.filter(keyword__contains=keyword)

    return render_to_response('search.html', {'users': users})



def about(request):
    u = _check_cookie(request)
    if not u:
        return render_to_response('about.html')
    client = APIClient(app_key=APP_KEY, app_secret=APP_SECRET, redirect_uri=CALLBACK_URL)
    client.set_access_token(u['token'], u['expires'])
    try:
        uinfo = client.users.show.get(access_token=u['token'], uid=u['uid'])
        return render_to_response('about.html', {'login':True, 'uinfo':uinfo})
    except:
        pass

    return render_to_response('about.html')

def explor(request):

    u = _check_cookie(request)
    if not u:
        return render_to_response('explor.html')
    client = APIClient(app_key=APP_KEY, app_secret=APP_SECRET, redirect_uri=CALLBACK_URL)
    client.set_access_token(u['token'], u['expires'])
    try:
        uinfo = client.users.show.get(access_token=u['token'], uid=u['uid'])
        return render_to_response('explor.html', {'login':True, 'uinfo':uinfo})
    except:
        pass

    return render_to_response('explor.html')


def user(request):
    fans = {}
    informed = {}
    uname = request.GET['uname']
    fans_layer = int(request.GET['fans_layer'])
    srate = float(request.GET['srate'])
    user = User.objects.get(name=uname)
    userlist = [user]
    user.visited = 1
    user.informed = 1

    for i in xrange(fans_layer):
        if not userlist:
            break
        new_fans = []
        for u in userlist:
            u.visited = 1
            fs = u.get_fans()
            if u.informed == 1:
                for f in fs:
                    if random.random() <= srate:
                        f.informed = 1
            new_fans += fs
            fans[u.name] = [f.name for f in fs]
            informed[u.name] = [f.name for f in fs if f.informed == 1]

        userlist = [u for u in new_fans if u.visited == 0]
    return HttpResponse(json.dumps({'fans': fans, 'informed': informed}))

    # return HttpResponse(json.dumps({'fans':{'1':['2', '3', '4'], '2':['1', '4']}, 'informed':{'1':['2']}}))

#
# def user(request):
#     uname = request.GET['uname']
#     fans_layer = int(request.GET['fans_layer'])
#     srate = float(request.GET['srate'])
#     return HttpResponse('%s,%s,%s' % (uname, fans_layer, srate))

