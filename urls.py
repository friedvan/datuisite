from django.conf.urls.defaults import *
from datuisite.datui.views import *
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    # (r'^datuisite/', include('datuisite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
    (r'^$', home),
    (r'^search/$', search),
     (r'^search/(\w+)/$', search_key),
    (r'^explor/$', explor),
    (r'^about/$', about),
    # (r'^user/\*/$', user, {'uname':'1746599622', 'fans_layer':5, 'srate':0.5}),
    (r'^user/\w+/$', user),
    (r'^static/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': "./media/", 'show_indexes': True}),
)
