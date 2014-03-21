# Create your views here.

from django.shortcuts import render_to_response
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.http import HttpResponse
from datuisite.datui.models import *
import json
import random


# def home(request):
#     users = User.objects.order_by('urank')
#     return render_to_response('search.html', {'users': users})
def home(request):

    return render_to_response('home.html')


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
    return render_to_response('about.html')


def explor(request):
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

