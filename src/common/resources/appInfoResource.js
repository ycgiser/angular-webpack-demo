/**
 * @description [几款运动app]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

export default function appInfoResource($http) {
    'ngInject';
    return $http.get('/common/data/appInfo.json')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
}