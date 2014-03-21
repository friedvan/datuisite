from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(primary_key=True, max_length=135, blank=False)
    # id = models.IntegerField(blank=False)
    visited = models.IntegerField(default=0)
    informed = models.IntegerField(default=0)
    score = models.FloatField(null=True)
    urank = models.IntegerField(null=True)
    keyword = models.CharField(max_length=1000, blank=True)
    relation = models.ManyToManyField('self', symmetrical=False)


    def __unicode__(self):
        # return u'%s\t%s\t%s\t%s\n' % (self.name, self.score, self.urank, self.keyword)
        return u'%s'%(self.name)

    def get_fans(self):
        fan_list=[]
        fans = self.user_set.all()
        for f in fans:
            fan_list.append(f)
        return fan_list


    # def calculateLeaders(self):
    #     return Relation.objects.filter(user2=self.id).count()
    #
    # def get_followers(self):
    #     return self.filter(user1=self.id)
    #
    # leaders = property(calculateLeaders)
    # followers = property(calculateFollowers)
    # class Meta:
    #     db_table = u'user'


# class Relation(models.Model):
#     id = models.IntegerField(primary_key=True)
#     user1 = models.ForeignKey(User)
#     user2 = models.ManyToManyField(User, related_name='user2')
    # class Meta:
    #     db_table = u'relation'
    #
    # def getName(self):
    #     return self.user1.name
    #
    # def getRank(self):
    #     return self.user1.urank
    #
    # def getScore(self):
    #     return self.user1.score
    #
    # def getLeaders(self):
    #     return self.user1.leaders
    #
    # def getFollowers(self):
    #     return self.user1.followers
    #
    # name = property(getName)
    # urank = property(getRank)
    # score = property(getScore)
    # leaders = property(getLeaders)
    # followers = property(getFollowers)
